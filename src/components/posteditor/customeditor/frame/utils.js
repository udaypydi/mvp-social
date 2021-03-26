import { nanoid } from 'nanoid';
import { TEXT_HTML, CONTAINER_HTML, IMAGE_HTML } from '../componentHTML';

function parseHTML(doc) {
    const parser = new DOMParser();
    const htmlDoc = parser.parseFromString(doc, 'text/html');
    const editorBody = htmlDoc.getElementById('editor-body');
    return { htmlDoc, editorBody };
}

function addImage(doc) {
    const { htmlDoc, editorBody } = parseHTML(doc);
    const image = document.createElement('img');
    image.id = nanoid();
    image.src = 'https://lh3.googleusercontent.com/proxy/dZCIhaprlqEjieHqSZpYUxwl8QtqPd611n1SQXnIPZp4nSVoS48lUKXt8ouJSQvrWufRJhdwLkbtNQKHxye_EVsRM6WEl2lHLTHeWiKwGdRqmV3Lh-xcy_xTS2IHG4Ezk16oNMVMFrNdrgY';
    image.height = 200;
    image.width = 200;
    editorBody.append(image);
    return htmlDoc.getElementsByTagName('html')[0].innerHTML;
}


function addText(doc) {
    const { htmlDoc, editorBody } = parseHTML(doc);
    const p = document.createElement('p');
    p.id = nanoid();
    p.innerText = 'Enter your text here';
    editorBody.append(p);
    return htmlDoc.getElementsByTagName('html')[0].innerHTML;
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