import { gsap } from 'gsap';
import { navigate } from "gatsby";


let DOM = {
    // frame: document.querySelector('.frame'),
    // content: document.querySelector('.content'),
    enterCtrl: document.querySelector('.enter'),
    enterBackground: document.querySelector('.enter__bg')
};

export class CircleTextController {
    static instance = null
    started = false

    static getInstance(el){

        if( this.instance ){
            return this.instance
        }else{
            this.instance = new CircleTextController(el)
            return this.instance
        }
    }

    constructor(el) {
        // the SVG element
        this.DOM = {el: document.querySelector('.circles')};
        // SVG texts
        this.DOM.circleText = [...this.DOM.el.querySelectorAll('text.circles__text')];
        this.DOM.button = document.querySelectorAll('.rotation-circle .enter');
        this.DOM.buttonTxt = document.querySelectorAll('.circles__text');
        // total
        this.circleTextTotal = this.DOM.circleText.length;

        DOM = {
            frame: document.querySelector('.frame'),
            content: document.querySelector('.content'),
            enterCtrl: document.querySelector('.enter'),
            enterTxt: document.querySelector('.enter__text')
        };

        
        this.setup();
    }

    setup() {
        // need to set the transform origin
        // need to set the transform origin in the center
        gsap.set(this.DOM.circleText, { transformOrigin: '50% 50%' });
        // hide on start
        gsap.set([this.DOM.circleText ], {opacity: 0});
        // don't allow to hover
        gsap.set(DOM.enterCtrl, {pointerEvents: 'none'});

        this.initEvents();
    }

    initEvents() {

        this.enterMouseEnterEv = () => {
            gsap.killTweensOf([DOM.enterBackground,this.DOM.circleText]);

            gsap.to(this.DOM.circleText, {
                duration: 1,
                ease: 'expo',
                scale: 1.15,
                rotation: i => i%2 ? '-=90' : '+=90',
                opacity: 0.4,
                
            })

            gsap.to(this.DOM.button, {
                duration: 0.9,
                ease: 'back.out',
                scale: 1.35,
            } );
        };

        this.enterMouseLeaveEv = () => {
            // gsap.killTweensOf([DOM.enterBackground,this.DOM.circleText]);

            gsap.to(this.DOM.circleText, {
                duration: 1,
                ease: 'expo',
                scale: 1,
                rotation: i => i%2 ? '+=120' : '-=120',
                opacity: 1,
                stagger: {
                    amount: -0.2
                }
            });

            gsap.to(this.DOM.button, {
                duration: 0.9,
                ease: 'back.out',
                scale: 1,
            } );
        };

        DOM.enterCtrl.addEventListener('mouseenter', this.enterMouseEnterEv);
        DOM.enterCtrl.addEventListener('mouseleave', this.enterMouseLeaveEv);

        this.enterClickEv = () => this.enter();
        DOM.enterCtrl.addEventListener('click', this.enterClickEv);
    }

    start() {
        this.startTL = gsap.timeline()
        .addLabel('start', 0)
        // rotation for all texts
        .to(this.DOM.circleText, {
            duration: 3,
            ease: 'expo.inOut',
            rotation: i => i%2 ? 90 : -90,
            stagger: {
                amount: 0.4
            }
        }, 'start')
        // scale in the texts & enter button and fade them in
        .to([this.DOM.circleText, DOM.enterCtrl], {
            duration: 3,
            ease: 'expo.inOut',
            startAt: {opacity: 0, scale: 0.8},
            scale: 1,
            opacity: 1,
            stagger: {
                amount: 0.4
            }
        }, 'start')
        // at start+1 allow the hover over the enter ctrl
        .add(() => {
            gsap.set(DOM.enterCtrl, {pointerEvents: 'auto'});
        }, 'start+=2');

        this.started = true
    }

    enter() {
        this.startTL.kill();
        
        gsap.set(DOM.enterCtrl, {pointerEvents: 'none'});
        DOM.enterCtrl.removeEventListener('mouseenter', this.enterMouseEnterEv);
        DOM.enterCtrl.removeEventListener('mouseleave', this.enterMouseLeaveEv);

        // gsap.set([DOM.frame, DOM.content], {opacity: 1});

        gsap.timeline()
        .addLabel('start', 0)
        .to(DOM.enterCtrl, {
            duration: 0.6,
            ease: 'back.in',
            scale: 0.2,
            opacity: 0
        }, 'start')
        .to(this.DOM.circleText, {
            duration: 0.8,
            ease: 'back.in',
            scale: 0,
            opacity: 0,
            stagger: {
                amount: -0.4
            }
        }, 'start')

          .add(() => {
              navigate('/projects')
          }, 'start+=1.3')

    }
}

export default CircleTextController