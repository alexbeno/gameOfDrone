import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import HomeIntro from '@/components/home/intro'

import Chapitre1 from '@/components/chapter1/Home'
import chap1Intro from '@/components/chapter1/intro'
import chap1Drone from '@/components/chapter1/drone'
import chap1Video from '@/components/chapter1/video1'
import chap1Data from '@/components/chapter1/data'
import chap1Comp from '@/components/chapter1/comp'
import chap1Video2 from '@/components/chapter1/video2'

import Chapitre2 from '@/components/chapter2/Home'
import chap2Intro from '@/components/chapter2/intro'
import chap2Para from '@/components/chapter2/video1'
import chap2Chang from '@/components/chapter2/video2'
import chap2Opp from '@/components/chapter2/opposition'
import chap2Guerre from '@/components/chapter2/guerre'

import Chapitre3 from '@/components/chapter3/Home'
import chap3Intro from '@/components/chapter3/intro'
import chap3Calvaire from '@/components/chapter3/video1'
import chap3Chiffre from '@/components/chapter3/number'
import chap3Opp from '@/components/chapter3/opponent'
import chap3Mission from '@/components/chapter3/mission'
import chap3Justice from '@/components/chapter3/justice'
import chap3You from '@/components/chapter3/you'

import Chapitre4 from '@/components/chapter4/Home'
import chap4Intro from '@/components/chapter4/intro'
import chap4Terro from '@/components/chapter4/ei'
import chap4Security from '@/components/chapter4/security'
import chap4End from '@/components/chapter4/end'

import Hello from '@/components/Hello'

var SocialSharing = require('vue-social-sharing');
Vue.use(SocialSharing);

Vue.use(Router)

export default new Router({
  mode: 'history',

  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/',
          component: HomeIntro
        },
      ]
    },
    {
      path: '/chapitre1',
      component: Chapitre1,
      children: [
        {
          path: '/',
          component: chap1Intro
        },
        {
          path: 'chapitre1',
          component: chap1Intro
        },
        {
          path: 'le-drone',
          component: chap1Drone
        },
        {
          path: 'presentation',
          component: chap1Video
        },
        {
          path: 'data',
          component: chap1Data
        },
        {
          path: 'comparaison',
          component: chap1Comp
        },
        {
          path: 'consequence',
          component: chap1Video2
        }
      ]
    },
    {
      path: '/chapitre2',
      name: 'chapitre2',
      component: Chapitre2,
      children: [
        {
          path: '/',
          component: chap2Intro
        },
        {
          path: 'paradigme',
          component: chap2Para
        },
        {
          path: 'changement',
          component: chap2Chang
        },
        {
          path: 'opposition',
          component: chap2Opp
        },
        {
          path: 'guerre',
          component: chap2Guerre
        },
      ]
    },
    {
      path: '/chapitre3',
      name: 'chapitre3',
      component: Chapitre3,
      children: [
        {
          path: '/',
          component: chap3Intro
        },
        {
          path: 'calvaire',
          component: chap3Calvaire
        },
        {
          path: 'les-chiffres',
          component: chap3Chiffre
        },
        {
          path: 'enemis',
          component: chap3Opp
        },
        {
          path: 'missions',
          component: chap3Mission
        },
        {
          path: 'justice',
          component: chap3Justice
        },
        {
          path: 'a-vous',
          component: chap3You
        },
      ]
    },
    {
      path: '/chapitre4',
      name: 'chapitre4',
      component: Chapitre4,
      children: [
        {
          path: '/',
          component: chap4Intro
        },
        {
          path: 'terrorisme',
          component: chap4Terro
        },
        {
          path: 'securite',
          component: chap4Security
        },
        {
          path: 'fin',
          component: chap4End
        },
      ]
    }
  ]
})

// class for the lethargy scroll in the home page
class ScrollingEvent
{
  constructor(divToScroll, nextStep)
  {
    this.mainScrollDiv = document.querySelector(divToScroll);
    this.nextStep = nextStep;
  }
  execute()
  {
      console.log('coucou')
  }
  goTo(check)
  {
    let that = this
    let checkScroll = true
    let lethargy = new Lethargy()
    var scroll = function scroll(e)
    {
      if (checkScroll === true)
      {
        checkScroll = false
        e.preventDefault();
        e.stopPropagation();
        if (lethargy.check(e) === check) that.execute()
      }
    }

    this.mainScrollDiv.addEventListener('mousewheel', scroll)
    this.mainScrollDiv.addEventListener('DOMMouseScroll', scroll)
    this.mainScrollDiv.addEventListener('wheel', scroll)
    this.mainScrollDiv.addEventListener('MozMousePixelScroll', scroll)
    }
  }

  // const scrollChap = new ScrollingEvent('.chapter1-etape1', 'etape2')
  // scrollChap.goTo(-1)
