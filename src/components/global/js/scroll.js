import Vue from 'vue'
import App from '@/App'
import router from '@/router'

class ScrollingEvent
{
  constructor(divToScroll, nextStep, prevStep, duration)
  {
    this.mainScrollDiv = document.querySelector(divToScroll);
    this.nextStep = nextStep;
    this.prevStep = prevStep;
    this.duration = duration;
  }
  anime(check, path, end, aud)
  {
      this.path = path;
      this.aud = aud;
      let that = this
      that.mainScrollDiv.classList.remove('enter')
      that.mainScrollDiv.classList.add('leave')
      var lowVol = true;
      setTimeout(function ()
      {
        if(check === -1)
        {
          that.next(that.path);
        }
        else if(check === 1)
        {
          that.prevs(that.path);
        }
      }, that.duration)

      if(end === true) {
        var vol = document.getElementById(that.aud);
        var currentvol = vol.volume;
        if(lowVol === true)
        {
          var inter = setInterval(function ()
          {
            if(vol.volume > 0.1)
            {
              vol.volume -= 0.2;
            }
            else
            {
              clearInterval(inter);
              lowVol = false;

            }
          }, 100)
        }
      }
  }
  enter()
  {
    let that = this
    setTimeout(function ()
    {
      that.mainScrollDiv.classList.remove('leave')
      that.mainScrollDiv.classList.add('enter')
    }, 500)
  }
  next(pathS)
  {
    this.path = pathS;
    let that = this
    router.push({ path: that.path })
  }
  prevs()
  {
    let that = this
    router.push({ path: that.prevStep })
  }
  goTo(check, path, end, aud)
  {
    if(end)
      this.end = true;
    else
      this.end = false;
    if(aud)
      this.aud = aud;
    else
      this.aud = "not";

    this.check = check;
    this.path = path;
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
        if (lethargy.check(e) === -1) {that.anime(-1, that.nextStep, that.end, that.aud)}
        if (lethargy.check(e) === 1) {that.anime(1, that.prevStep, that.end, that.aud)}
        setTimeout(function ()
        {
          checkScroll = true
        }, 500)
      }
    }
    that.mainScrollDiv.addEventListener('mousewheel', scroll)
    that.mainScrollDiv.addEventListener('DOMMouseScroll', scroll)
    that.mainScrollDiv.addEventListener('wheel', scroll)
    that.mainScrollDiv.addEventListener('MozMousePixelScroll', scroll)
    }
  singlGoTo(check, path, end, aud)
  {
    if(end)
      this.end = true;
    else
      this.end = false;
    if(aud)
      this.aud = aud;
    else
      this.aud = "not";
    this.check = check;
    this.path = path;
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
        if (lethargy.check(e) === that.check) {that.anime(that.check, that.path, that.end, that.aud)}
        setTimeout(function ()
        {
          checkScroll = true
        }, 1500)
      }
    }
    that.mainScrollDiv.addEventListener('mousewheel', scroll)
    that.mainScrollDiv.addEventListener('DOMMouseScroll', scroll)
    that.mainScrollDiv.addEventListener('wheel', scroll)
    that.mainScrollDiv.addEventListener('MozMousePixelScroll', scroll)
    }
  }

export default ScrollingEvent
