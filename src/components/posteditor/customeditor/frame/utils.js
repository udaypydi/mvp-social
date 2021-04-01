import { nanoid } from 'nanoid';
import { TEXT_HTML, CONTAINER_HTML, IMAGE_HTML } from '../componentHTML';
import interact from 'interactjs';
import theme from 'src/theme';

const { colors } = theme;
let eventEmitter = null;

function addInteraction(container, element, classId) {
    let x = 0;
    let y = 0;

    interact(`#editor-frame`, { context: container })
        .dropzone({
            accept: `#${element.id}`,
            overlap: 0.01,
        });

    interact(element,  { context: container } )
        .draggable({
            inertia: true,
            modifiers: [
                interact.modifiers.snap({
                    targets: [
                    interact.snappers.grid({ x: 10, y: 10 })
                    ],
                    range: Infinity,
                    relativePoints: [ { x: 0, y: 0 } ]
                }),
                interact.modifiers.restrict({
                    restriction: element.parentNode,
                    elementRect: { top: 0, left: 0, bottom: 1, right: 1 },
                    endOnly: true
                })
            ],
            autoScroll: false,
        })
        .on('dragmove', function(event) {
                x += event.dx
                y += event.dy
                event.target.style.webkitTransform =
                event.target.style.transform =
                    'translate(' + x + 'px, ' + y + 'px)';
        });

    interact(element)
        .on('click', function (event) {
            eventEmitter.emit('elementClicked', { element });
            event.stopImmediatePropagation();
        }, true);

    interact(element, { context: container })
        .resizable({
            edges: { left: true, right: true, bottom: true, top: true },
            listeners: {
                move (event) {
                    if (!element.classList.contains('editor-active-element')) {
                        element.classList.add('editor-active-element');
                    }
                    let target = event.target
                    let x = (parseFloat(target.getAttribute('data-x')) || x)
                    let y = (parseFloat(target.getAttribute('data-y')) || y)
                    target.style.width = event.rect.width + 'px'
                    target.style.height = event.rect.height + 'px'
                    x += event.deltaRect.left
                    y += event.deltaRect.top


                    target.style.webkitTransform = target.style.transform =
                    'translate(' + x + 'px,' + y + 'px)'

                    target.setAttribute('data-x', x)
                    target.setAttribute('data-y', y)
                },

                end(event) {
                    eventEmitter.emit('elementResized', { element: event.target });
                }
            },
            modifiers: [
                interact.modifiers.restrictEdges({
                    outer: 'parent'
                }),
                interact.modifiers.restrictSize({
                    min: { width: 20, height: 20 }
                })
            ],

            inertia: true
        });
}

function addImage(doc) {
    const iframeDoc = document.getElementById('editor-frame').contentWindow.document;
    const editorBody = iframeDoc.body;

    const image = iframeDoc.createElement('img');
    image.id = nanoid();
    image.src = 'https://lh3.googleusercontent.com/proxy/dZCIhaprlqEjieHqSZpYUxwl8QtqPd611n1SQXnIPZp4nSVoS48lUKXt8ouJSQvrWufRJhdwLkbtNQKHxye_EVsRM6WEl2lHLTHeWiKwGdRqmV3Lh-xcy_xTS2IHG4Ezk16oNMVMFrNdrgY';
    image.height = 200;
    image.width = 200;
    const classId = nanoid();
    image.classList.add(classId);
    eventEmitter.emit('elementClicked', { element: image });
    editorBody.append(image);
    addInteraction(iframeDoc, image, classId);
}


function addText(doc) {
    const iframeDoc = document.getElementById('editor-frame').contentWindow.document;
    const editorBody = iframeDoc.body;

    const p = iframeDoc.createElement('p');
    p.id = nanoid();
    p.innerText = 'Enter your text here';
    p.style.margin = '0px';
    p.style.width = 'fit-content';
    p.style.fontSize = '20px';
    p.style.padding = '10px';
    p.style.wordBreak = 'break-all';
    const classId = nanoid();
    p.classList.add(classId);
    eventEmitter.emit('elementClicked', { element: p });
    editorBody.append(p);
    addInteraction(iframeDoc, p, classId);
}

function addTwoColumnContainer(doc) {
    const { htmlDoc, editorBody } = parseHTML(doc);
    const div = document.createElement('div');
    div.style.height = '100vh';
    div.style.width = '100vw';
    div.style.border = '1px dashed #ccc';
    div.style.display = 'flex';
    div.id = nanoid();

    const innerDiv1 = document.createElement('div');
    innerDiv1.style.height = '100vh';
    innerDiv1.style.width = '50vw';
    innerDiv1.style.borderRight = '1px dashed #ccc';
    innerDiv1.id = nanoid();

    const innerDiv2 = document.createElement('div');
    innerDiv2.style.height = '100vh';
    innerDiv2.style.width = '50vw';
    innerDiv2.id = nanoid();

    div.appendChild(innerDiv1);
    div.appendChild(innerDiv2);

    editorBody.append(div);
    return htmlDoc.getElementsByTagName('html')[0].innerHTML;
}


export function initEmitter(emitter) {
    eventEmitter = emitter;
    addEditorEvents();
}

export function addElement(target, element) {
    switch (element.key) {
        case 'IMAGE':
            return addImage(target);

        case 'TEXT':
            return addText(target);

        case 'COLUMNS2':
            return addTwoColumnContainer(target);

        default:
            break;
    }
}

function getElementFromIframe(selector) {
    const iframeDoc = document.getElementById('editor-frame').contentWindow.document;
    return iframeDoc.getElementById(selector);
}   
function addEditorEvents() {
    eventEmitter.on('borderRadiusChange', (event) => {
        const { elementId, borderType, borderRadius } = event;

        const element = getElementFromIframe(elementId);
        if (borderType === 'rounded') {
            element.style.borderRadius = '50%';
        } else if (borderType === 'none') {
            element.style.borderRadius = '0px';
        }  else {
            element.style.borderRadius = `${borderRadius}%`;
        }
    });

    eventEmitter.on('boxShadowChange', (event) => {
        const { elementId, boxShadow: {
            x,
            y,
            blur,
            spread,
            hex,
        } } = event;
        const element = getElementFromIframe(elementId);
        element.style.boxShadow = `${x}px ${y}px ${blur}px ${spread}px ${hex}`;
    });

    eventEmitter.on('dimensionsChange', (event) => {
        const { elementId, dimensions: {
            width,
            height,
        }} = event;

        const element = getElementFromIframe(elementId);
        element.style.width = `${width}px`;
        element.style.height = `${height}px`;
    });

    eventEmitter.on('fontSizeChange', (event) => {
        const { elementId, fontSize } = event;
        const element = getElementFromIframe(elementId);
        element.style.fontSize = `${fontSize}px`;
    });
    
    eventEmitter.on('fontColorChange', (event) => {
        const { elementId, color } = event;
        const element = getElementFromIframe(elementId);
        element.style.color = color;
    });
}
