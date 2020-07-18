import React from 'react';
import { withRouter } from 'react-router-dom';

/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Button from 'commons/button/button.component.js';
import styles from './home.styles';

function Home(props) {

  function handleButtonClick() {
    props.history.push('/dashboard');
  }

  return (
    <div css={styles.homeContainer}>
      <div css={styles.containerOne}>
        {/* <img src={require('../../resources/images/Post.png')} css={styles.imageStyle} /> */}
        <h1 css={styles.content1}>Save your valuable time with the new way of social networking.</h1>
        <h2 css={styles.content2}>Manage your social accounts in few click.</h2>
        <Button 
          buttonText="Get Started"
          buttonStyle={styles.buttonStyle}
          handleButtonClick={handleButtonClick}
        />
      </div>
      <div css={styles.containerTwo}>
        <h1 css={css`${styles.content1} ${styles.secondContainerContent1}`}>How It Works?</h1>
        <img src={require('../../resources/images/add_accounts.png')} css={styles.imageStyle} />
        <p css={styles.description}>
          Add your Linkedin, Twitter, Facebook, Pinterest and Instagram accounts just once to CastMyPost and manage from the dashboard.
          You can add and remove accounts at any time.
        </p>
        <div css={styles.sectionNumber}>
          <p>1</p>
        </div>
      </div>
      <div css={css`${styles.containerTwo} ${styles.greyGradient}`}>
        <h1 css={css`${styles.content1} ${styles.secondContainerContent1}`}>Design Your Posts</h1>
        <img src={require('../../resources/images/design_posts.jpg')} css={styles.imageStyle} />
        <p css={styles.description}>
          Design posts for your social accounts using our smooth drag and drop editor. You can use the existing templates or build a new one from scratch.
        </p>
        <div css={styles.sectionNumber}>
          <p>2</p>
        </div>
      </div>
      <div css={styles.containerTwo}>
        <h1 css={css`${styles.content1} ${styles.secondContainerContent1}`}>Publish Or Schedule Your Posts</h1>
        <img src={require('../../resources/images/post.png')} css={styles.imageStyle} />
        <p css={styles.description}>
          You can publish the posts immediately or schedule it to post it later. Once the post is scheduled, we handle this for you. You can publish your posts to multiple social accounts in a single click.
        </p>
        <div css={styles.sectionNumber}>
          <p>3</p>
        </div>
      </div>
      <div css={css`${styles.containerTwo} ${styles.greyGradient}`}>
        <h1 css={css`${styles.content1} ${styles.secondContainerContent1}`}>Track And Analyse Your Social Activities</h1>
        <img src={require('../../resources/images/analytics.png')} css={styles.imageStyle} />
        <p css={styles.description}>
          Track all your social accounts activites easily. We provide a graphical data of each and every post that is published by you. Its easy to analyse and improve through our analytics tools.
        </p>
        <div css={styles.sectionNumber}>
          <p>4</p>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Home);
