// Main Script
window.mobileCheck = function() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
};

// set Country code
const input = document.querySelector('#whatsapp-input');
const iti = window.intlTelInput(input, {
    initialCountry: 'auto',
    geoIpLookup: (success) => {
        fetch('https://ipinfo.io', {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                const countryCode = (data && data.country) ? data.country : '';
                success(countryCode);
            });
    },
});

// Get the modal
const imageModal = document.getElementById('imageModal');
const shareModal = document.getElementById('shareModal');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == imageModal || event.target == shareModal) {
        imageModal.style.display = 'none';
        shareModal.style.display = 'none';
    }
};

const modalImg = document.getElementById('img01');
const captionText = document.getElementById('caption');

function openImageModal(e) {
    imageModal.style.display = 'block';
    modalImg.src = e.src;
    captionText.innerHTML = e.alt;
}

// Get the <span> element that closes the modal
const imageModalClose = document.getElementById('imageModalClose');

// When the user clicks on <span> (x), close the modal
imageModalClose.onclick = function () {
    imageModal.style.display = 'none';
};


function openShareModal(e, title) {
    if (navigator.share) {
        navigator.share({
            title,
            url: window.location.href,
        }).then(() => {
            console.log('Thanks for sharing!');
        })
            .catch(console.error);
    } else {
        shareModal.style.display = 'flex';
    }
}

// Get the <span> element that closes the modal
const shareModalClose = document.getElementById('shareModalClose');

// When the user clicks on <span> (x), close the modal
shareModalClose.onclick = function () {
    shareModal.style.display = 'none';
};


function handleWhatsappShare(e) {
    const { value } = document.getElementById('whatsapp-input');

    if (value.length < 10) {
        e.preventDefault();
        return;
    }
    e.href = `https://wa.me/${iti.getNumber()}?text=${window.location.href}`;
}
function handleDirectWhatsappShare(e, whatsappNumber) {
    if (window.mobileCheck()) {
        e.href = `whatsapp:\/\/send?text=${window.location.href}`;
    } else if (whatsappNumber) {
        e.href = `https://wa.me/91${whatsappNumber}?text=${window.location.href}`;
    } else {
        e.href = `whatsapp:\/\/send?text=${window.location.href}`;
    }
}

function sendEnquiry(ele, mailTo) {
    ele.value = 'Sending...';
    ele.disabled = true;
    const name = document.getElementById('enquiryName');
    const mobile = document.getElementById('phoneNumber');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    const data = {};
    data.mailTo = mailTo;
    data.name = name.value;
    data.mobile = mobile.value;
    data.email = email.value;
    data.message = message.value;
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState === 4) {
            const response = JSON.parse(this.response);
            if (this.status === 200) {
                alert('Success: Mail sent Successfuly');
                name.value = '';
                mobile.value = '';
                email.value = '';
                message.value = '';
            } else {
                alert(`Error: ${response.data.message}`);
            }
            ele.value = 'Send';
            ele.disabled = false;
        }
    };
    xhr.open('POST', '/api/v1/contact');
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(JSON.stringify(data));
}

// Feedback code
const starRatingControl = new StarRating('.star-rating', {
    maxStars: 5,
});

function sendFeedback(ele, cardId) {
    ele.value = 'Sending...';
    ele.disabled = true;
    const feedbackList = document.getElementsByClassName('feedback-list')[0];
    const star = document.getElementById('rating');
    const name = document.getElementById('feedbackName');
    const feedback = document.getElementById('feedback');
    const data = {};
    data.cardId = cardId;
    data.star = star.value;
    data.name = name.value;
    data.feedback = feedback.value;
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState === 4) {
            const response = JSON.parse(this.response);
            if (this.status === 200) {
                alert('Success: Feedback Given Successfully');
                star.value = '';
                name.value = '';
                feedback.value = '';

                // Pushing new feedback in the list
                const feedbackResponse = response.data.feedback;
                const newFeedback = `<div class="feedback-wrapper">
                    <span class="feedback-name-wrapper"><span class="feedback-name">${feedbackResponse.name}</span> on ${feedbackResponse.date} </span>
                    <div><span class="gl-star-rating-stars s${feedbackResponse.star}0"><span data-value="1" data-text="Terrible"></span><span data-value="2" data-text="Poor"></span><span data-value="3" data-text="Average"></span><span data-value="4" data-text="Very Good"></span><span data-value="5" data-text="Excellent"></span></span></div>
                    <div>${feedbackResponse.feedback}</div>
                    <hr />
                </div>`;
                feedbackList.insertAdjacentHTML('afterbegin', newFeedback);
            } else {
                alert(`Error: ${response.data.message}`);
            }
            ele.value = 'Give Feedback';
            ele.disabled = false;
        }
    };
    xhr.open('POST', '/api/v1/feedback');
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(JSON.stringify(data));
}

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js').then(
        () => {
            console.log('Service Worker Registered');
        },
    );
}

let feedbacks = [];
let totalFeedbacks = 0;
let currentFeedbackPage = 0;
const feedbackLimit = 5;

const getFeedbacks = (cardId, page, limit) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (this.readyState === 4) {
                const response = JSON.parse(this.response);
                if (this.status === 200) {
                    resolve(response.data);
                } else {
                    reject(response.data.message);
                }
            }
        };
        xhr.open('GET', `/api/v1/feedback?cardId=${cardId}&limit=${limit}&page=${page}`);
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.send();
    });
};
const renderFeedbacks = (feedbacksArr) => {
    const feedbackList = document.getElementById('feedback-list');
    feedbackList.innerHTML = '';
    const elements = feedbacksArr.map((feedback) => {
        return `<div class="feedback-wrapper">
            <span class="feedback-name-wrapper"><span class="feedback-name">${feedback.name}</span> on ${feedback.date} </span>
            <div><span class="gl-star-rating-stars s${feedback.rating}0"><span data-value="1" data-text="Terrible"></span><span data-value="2" data-text="Poor"></span><span data-value="3" data-text="Average"></span><span data-value="4" data-text="Very Good"></span><span data-value="5" data-text="Excellent"></span></span></div>
            <div>${feedback.feedback}</div>
            <hr />
        </div>`;
    });
    for (let i = 0; i < elements.length; i += 1) {
        feedbackList.insertAdjacentHTML('beforeend', elements[i]);
    }
};

const getAndRenderFeedbacks = async (cardId, element) => {
    try {
        if (element) {
            element.value = 'Loading...';
            element.disabled = true;
        }
        currentFeedbackPage += 1;
        const response = await getFeedbacks(cardId, currentFeedbackPage, feedbackLimit);
        totalFeedbacks = response.total;
        feedbacks = feedbacks.concat(
            response.list,
        );
        renderFeedbacks(feedbacks);

        if (totalFeedbacks <= feedbacks.length) {
            const loadMoreBtn = document.getElementById('load-more-feedback-btn');
            loadMoreBtn.style.display = 'none';
        }
        if (element) {
            element.value = 'Load more feedbacks';
            element.disabled = false;
        }
    } catch (ex) {
        alert(`Error: ${ex}`);
    }
};

window.addEventListener('DOMContentLoaded', () => {
    let deferredPrompt;
    const saveBtn = document.querySelector('.save-card-button');
    saveBtn.style.display = 'none';

    window.addEventListener('beforeinstallprompt', (e) => {
        // Prevent Chrome 67 and earlier from automatically showing the prompt
        e.preventDefault();
        // Stash the event so it can be triggered later.
        deferredPrompt = e;
        // Update UI to notify the user they can add to home screen
        saveBtn.style.display = 'block';

        saveBtn.addEventListener('click', (e) => {
            // hide our user interface that shows our A2HS button
            saveBtn.style.display = 'none';
            // Show the prompt
            deferredPrompt.prompt();
            // Wait for the user to respond to the prompt
            deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('User accepted the A2HS prompt');
                } else {
                    console.log('User dismissed the A2HS prompt');
                }
                deferredPrompt = null;
            });
        });
    });

    const feedbackList = document.getElementById('feedback-list');
    if (feedbackList) {
        getAndRenderFeedbacks(window.cardId);

        document.getElementById('load-more-feedback-btn')
            .addEventListener('click', (event) => {
                getAndRenderFeedbacks(window.cardId, event.target);
            });
    }
});

// Star Rating
/*!
 * Star Rating
 * @version: 3.1.5
 * @author: Paul Ryley (http://geminilabs.io)
 * @url: https://github.com/pryley/star-rating.js
 * @license: MIT
 */
/** global: define, Event */
(function (window, document, undefined) {
    const handle = 'star-rating';

    /** @return object */
    const Plugin = function (selector, options) { // string|object|NodeList, object
        const selectorType = {}.toString.call(selector);
        if (selectorType === '[object String]') {
            this.selects = document.querySelectorAll(selector);
        } else if (selectorType === '[object NodeList]') {
            this.selects = selector;
        } else {
            this.selects = [selector];
        }
        this.destroy = function () {
            this.widgets.forEach((widget) => {
                widget.destroy_();
            });
        };
        this.rebuild = function () {
            this.widgets.forEach((widget) => {
                widget.rebuild_();
            });
        };
        this.widgets = [];
        for (let i = 0; i < this.selects.length; i++) {
            if (this.selects[i].tagName !== 'SELECT' || this.selects[i][handle]) continue;
            const widget = new Widget(this.selects[i], options);
            if (widget.direction === undefined) continue;
            this.widgets.push(widget);
        }
    };

    /** @return void */
    var Widget = function (el, options) { // HTMLElement, object|null
        this.el = el;
        this.options_ = this.extend_({}, this.defaults_, options || {}, JSON.parse(el.getAttribute('data-options')));
        this.setStarCount_();
        if (this.stars < 1 || this.stars > this.options_.maxStars) return;
        this.init_();
    };

    Widget.prototype = {

        defaults_: {
            classname: 'gl-star-rating',
            clearable: true,
            initialText: 'Select a Rating',
            maxStars: 10,
            showText: true,
        },

        /** @return void */
        init_() {
            this.initEvents_();
            this.current = this.selected = this.getSelectedValue_();
            this.wrapEl_();
            this.buildWidgetEl_();
            this.setDirection_();
            this.setValue_(this.current);
            this.handleEvents_('add');
            this.el[handle] = true;
        },

        /** @return void */
        buildLabelEl_() {
            if (!this.options_.showText) return;
            this.textEl = this.insertSpanEl_(this.widgetEl, {
                class: `${this.options_.classname}-text`,
            }, true);
        },

        /** @return void */
        buildWidgetEl_() {
            const values = this.getOptionValues_();
            const widgetEl = this.insertSpanEl_(this.el, {
                class: `${this.options_.classname}-stars`,
            }, true);
            for (const key in values) {
                const newEl = this.createSpanEl_({
                    'data-value': key,
                    'data-text': values[key],
                });
                widgetEl.innerHTML += newEl.outerHTML;
            }
            this.widgetEl = widgetEl;
            this.buildLabelEl_();
        },

        /** @return void */
        changeTo_(index) { // int
            if (index < 0 || isNaN(index)) {
                index = 0;
            }
            if (index > this.stars) {
                index = this.stars;
            }
            this.widgetEl.classList.remove(`s${10 * this.current}`);
            this.widgetEl.classList.add(`s${10 * index}`);
            if (this.options_.showText) {
                this.textEl.textContent = index < 1 ? this.options_.initialText : this.widgetEl.childNodes[index - 1].dataset.text;
            }
            this.current = index;
        },

        /** @return HTMLElement */
        createSpanEl_(attributes) { // object
            const el = document.createElement('span');
            attributes = attributes || {};
            for (const key in attributes) {
                el.setAttribute(key, attributes[key]);
            }
            return el;
        },

        /** @return void */
        destroy_() {
            this.handleEvents_('remove');
            const wrapEl = this.el.parentNode;
            wrapEl.parentNode.replaceChild(this.el, wrapEl);
            delete this.el[handle];
        },

        /** @return void */
        eventListener_(el, action, events) { // HTMLElement, string, array
            events.forEach((event) => {
                el[`${action}EventListener`](event, this.events[event]);
            });
        },

        /** @return object */
        extend_() { // ...object
            const args = [].slice.call(arguments);
            const result = args[0];
            const extenders = args.slice(1);
            Object.keys(extenders).forEach((i) => {
                for (const key in extenders[i]) {
                    if (!extenders[i].hasOwnProperty(key)) continue;
                    result[key] = extenders[i][key];
                }
            });
            return result;
        },

        /** @return int */
        getIndexFromEvent_(ev) { // MouseEvent|TouchEvent
            const direction = {};
            const pageX = ev.pageX || ev.changedTouches[0].pageX;
            const widgetWidth = this.widgetEl.offsetWidth;
            direction.ltr = Math.max(pageX - this.offsetLeft, 1);
            direction.rtl = widgetWidth - direction.ltr;
            return Math.min(
                Math.ceil(direction[this.direction] / Math.round(widgetWidth / this.stars)),
                this.stars,
            );
        },

        /** @return object */
        getOptionValues_() {
            const { el } = this;
            const unorderedValues = {};
            const orderedValues = {};
            for (let i = 0; i < el.length; i++) {
                if (this.isValueEmpty_(el[i])) continue;
                unorderedValues[el[i].value] = el[i].text;
            }
            Object.keys(unorderedValues).sort().forEach((key) => {
                orderedValues[key] = unorderedValues[key];
            });
            return orderedValues;
        },

        /** @return int */
        getSelectedValue_() {
            return parseInt(this.el.options[Math.max(this.el.selectedIndex, 0)].value) || 0;
        },

        /** @return void */
        handleEvents_(action) { // string
            const formEl = this.el.closest('form');
            if (formEl && formEl.tagName === 'FORM') {
                this.eventListener_(formEl, action, ['reset']);
            }
            this.eventListener_(this.el, action, ['change', 'keydown']);
            this.eventListener_(this.widgetEl, action, [
                'mousedown', 'mouseleave', 'mousemove', 'mouseover',
                'touchend', 'touchmove', 'touchstart',
            ]);
        },

        /** @return void */
        initEvents_() {
            this.events = {
                change: this.onChange_.bind(this),
                keydown: this.onKeydown_.bind(this),
                mousedown: this.onPointerdown_.bind(this),
                mouseleave: this.onPointerleave_.bind(this),
                mousemove: this.onPointermove_.bind(this),
                mouseover: this.onPointerover_.bind(this),
                reset: this.onReset_.bind(this),
                touchend: this.onPointerdown_.bind(this),
                touchmove: this.onPointermove_.bind(this),
                touchstart: this.onPointerover_.bind(this),
            };
        },

        /** @return void */
        insertSpanEl_(el, attributes, after) { // HTMLElement, object, bool
            const newEl = this.createSpanEl_(attributes);
            el.parentNode.insertBefore(newEl, after === true ? el.nextSibling : el);
            return newEl;
        },

        /** @return bool */
        isValueEmpty_(el) { // HTMLElement
            return el.getAttribute('value') === null || el.value === '';
        },

        /** @return void */
        onChange_() {
            this.changeTo_(this.getSelectedValue_());
        },

        /** @return void */
        onKeydown_(ev) { // KeyboardEvent
            if (!~['ArrowLeft', 'ArrowRight'].indexOf(ev.key)) return;
            let increment = ev.key === 'ArrowLeft' ? -1 : 1;
            if (this.direction === 'rtl') {
                increment *= -1;
            }
            this.setValue_(Math.min(Math.max(this.getSelectedValue_() + increment, 0), this.stars));
            this.triggerChangeEvent_();
        },

        /** @return void */
        onPointerdown_(ev) { // MouseEvent|TouchEvent
            ev.preventDefault();
            const index = this.getIndexFromEvent_(ev);
            if (this.current !== 0 && parseFloat(this.selected) === index && this.options_.clearable) {
                this.onReset_();
                this.triggerChangeEvent_();
                return;
            }
            this.setValue_(index);
            this.triggerChangeEvent_();
        },

        /** @return void */
        onPointerleave_(ev) { // MouseEvent
            ev.preventDefault();
            this.changeTo_(this.selected);
        },

        /** @return void */
        onPointermove_(ev) { // MouseEvent|TouchEvent
            ev.preventDefault();
            this.changeTo_(this.getIndexFromEvent_(ev));
        },

        /** @return void */
        onPointerover_(ev) { // MouseEvent|TouchEvent
            ev.preventDefault();
            const rect = this.widgetEl.getBoundingClientRect();
            this.offsetLeft = rect.left + document.body.scrollLeft;
        },

        /** @return void */
        onReset_() {
            const originallySelected = this.el.querySelector('[selected]');
            const value = originallySelected ? originallySelected.value : '';
            this.el.value = value;
            this.selected = parseInt(value) || 0;
            this.changeTo_(value);
        },

        /** @return void */
        rebuild_() {
            if (this.el.parentNode.classList.contains(this.options_.classname)) {
                this.destroy_();
            }
            this.init_();
        },

        /** @return void */
        setDirection_() {
            const wrapEl = this.el.parentNode;
            this.direction = window.getComputedStyle(wrapEl, null).getPropertyValue('direction');
            wrapEl.classList.add(`${this.options_.classname}-${this.direction}`);
        },

        /** @return void */
        setValue_(index) {
            this.el.value = this.selected = index;
            this.changeTo_(index);
        },

        /** @return void */
        setStarCount_() {
            const { el } = this;
            this.stars = 0;
            for (let i = 0; i < el.length; i++) {
                if (this.isValueEmpty_(el[i])) continue;
                if (isNaN(parseFloat(el[i].value)) || !isFinite(el[i].value)) {
                    this.stars = 0;
                    return;
                }
                this.stars++;
            }
        },

        /** @return void */
        triggerChangeEvent_() {
            this.el.dispatchEvent(new Event('change'));
        },

        /** @return void */
        wrapEl_() {
            const wrapEl = this.insertSpanEl_(this.el, {
                class: this.options_.classname,
                'data-star-rating': '',
            });
            wrapEl.appendChild(this.el);
        },
    };

    if (typeof define === 'function' && define.amd) {
        define([], () => Plugin);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = Plugin;
    } else {
        window.StarRating = Plugin;
    }
}(window, document));

