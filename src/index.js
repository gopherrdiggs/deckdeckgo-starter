import '@ionic/core/css/ionic.bundle.css';

import './css/variables.css';
import './css/theme.css';
import './css/deck.css';
import './css/font.css';
import './css/rtl.css';
import './css/pager.css';
import './css/modal.css';
import './css/popover.css';
import './css/print.css';
import './css/alert.css';
import './css/img.css';
import './css/button.css';

import '@webcomponents/custom-elements';

import './scripts/loading.js';
import './scripts/slider.js';
import './scripts/sliderJumpTo.js';
import './scripts/modalNotes.js';
import './scripts/modalRemoteControl.js';
import './scripts/remoteControl.js';
import './scripts/actions.js';
import './scripts/menu.js';
import './scripts/history.js';
import './scripts/fullscreen.js';
import './scripts/resize.js';
import './scripts/actionPlayPause.js';

import { defineCustomElements as ionicElements } from '@ionic/core/loader';
ionicElements(window);

// Init DeckDeckGo elements
import { defineCustomElements as deckDeckGoElements } from '@deckdeckgo/core/dist/loader';

import {defineCustomElements as deckDeckGoSlideTitleElements } from '@deckdeckgo/slide-title/dist/loader';
import {defineCustomElements as deckDeckGoSlideContentElements } from '@deckdeckgo/slide-content/dist/loader';
import {defineCustomElements as deckDeckGoSlideAuthorElements } from '@deckdeckgo/slide-author/dist/loader';
import {defineCustomElements as deckDeckGoSlideYoutubeElements } from '@deckdeckgo/slide-youtube/dist/loader';
import {defineCustomElements as deckDeckGoSlideSplitElements } from '@deckdeckgo/slide-split/dist/loader';
import {defineCustomElements as deckDeckGoSlideGifElements } from '@deckdeckgo/slide-gif/dist/loader';

import { defineCustomElements as deckDeckGoRemoteElements } from '@deckdeckgo/remote/dist/loader';
import { defineCustomElements as deckDeckGoQRCodeElements } from '@deckdeckgo/qrcode/dist/loader';
import { defineCustomElements as deckDeckGoHighlightCodeElements } from '@deckdeckgo/highlight-code/dist/loader';
import { defineCustomElements as deckDeckGoLazyImgElements } from '@deckdeckgo/lazy-img/dist/loader';

// Init web-social-share
import { defineCustomElements as webSocialShareElements } from 'web-social-share/dist/loader';

deckDeckGoElements(window).then(async () => {
    await deckDeckGoQRCodeElements(window);
    await deckDeckGoHighlightCodeElements(window);
    await deckDeckGoLazyImgElements(window);

    const promises = [];

    promises.push(deckDeckGoSlideTitleElements(window));
    promises.push(deckDeckGoSlideContentElements(window));
    promises.push(deckDeckGoSlideAuthorElements(window));
    promises.push(deckDeckGoSlideYoutubeElements(window));
    promises.push(deckDeckGoSlideSplitElements(window));
    promises.push(deckDeckGoSlideGifElements(window));

    await Promise.all(promises);

    await postLoading();
    await initActions();
    await initFullscreen();

    await postLoadingJumpTo();
    await initDeckHistoryWatch();

    await webSocialShareElements(window);

    deckDeckGoRemoteElements(window).then(async () => {
        await initRemote();
    });
});
