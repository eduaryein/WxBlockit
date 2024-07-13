// Copyright (c) 2024 winxer.org
// Originally found at http://www.winxer.org
// 
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// 
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
// 
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
const wxblock = function(element) {
    element.forEach(el => {
        const id = el.id;
        const bgcolor = '#FFFFFF';
        const opacity = 50;
        const bwith = el.offsetWidth;
        const bheight = el.offsetHeight;
        const opacity2 = opacity / 100;

        el.insertAdjacentHTML('afterbegin', `<div class="wxloader" id="wxloader${id}"></div>`);
        const loader1 = document.querySelector(`#wxloader${id}`);
        loader1.style.width = `${bwith}px`;
        loader1.style.height = `${bheight}px`;
        loader1.style.background = bgcolor;
        loader1.style.position = 'absolute';
        loader1.style.filter = `alpha(opacity=${opacity})`;
        loader1.style.opacity = opacity2;
        loader1.style.zIndex = '99';

        el.insertAdjacentHTML('afterbegin', `<div class="wxloader2 loader" id="wxloader2${id}"></div>`);
        const loader2 = document.querySelector(`#wxloader2${id}`);
        loader2.style.width = `${bwith}px`;
        loader2.style.height = `${bheight}px`;
        loader2.style.position = 'absolute';
        loader2.style.zIndex = '9999';
    });
};

const wxunblock = function(element) {
    element.forEach(el => {
        const id = el.id;

        document.querySelector(`#wxloader${id}`).remove();
        document.querySelector(`#wxloader2${id}`).remove();

        el.style.display = 'block';
    });
};

const wxload = function(element) {
    element.forEach(el => {
        const id = el.id;

        el.insertAdjacentHTML('beforebegin', `<div class="wxloader" id="wxloader${id}"><div class="loader2"></div></div>`);

        el.style.display = 'none';
    });
};

const wxerror = function(element, msg) {
    element.forEach(el => {
        const id = el.id;

        el.insertAdjacentHTML('beforebegin', `<div class="wxerror${id} error_alert" style="display:none">${msg}</div>`);

        document.querySelector(`.wxerror${id}`).style.display = 'block';
    });
};

const wxsuccess = function(element, msg) {
    element.forEach(el => {
        const id = el.id;

        el.insertAdjacentHTML('beforebegin', `<div class="wxsuccess${id} success_alert" style="display:none"><span class="icon"></span>${msg}</div>`);

       document.querySelector(`.wxsuccess${id}`).style.display ='block';
    });
};

const wxadblock= function(element, bgcolor, opacity) {
    element.forEach(el => {
       const id=el.id;
       const bwith=el.offsetWidth;
       const bheight=el.offsetHeight;
       const opacity2=opacity/100;

       el.insertAdjacentHTML('afterbegin',`<div class="wxadblocked"></div>`);
       const adblocked=document.querySelector('.wxadblocked');
       adblocked.style.width=`${bwith}px`;
       adblocked.style.height=`${bheight}px`;
       adblocked.style.background=bgcolor;
       adblocked.style.position='absolute';
       adblocked.style.filter=`alpha(opacity=${opacity})`;
       adblocked.style.opacity=opacity2; 
    });
};

const wxadunblock=function(element){
   element.forEach(el=>{
      document.querySelector('.wxadblocked').remove();
   });
};