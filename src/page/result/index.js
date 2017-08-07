/* 
* @Author: 7Ryan
* @Date:   2017-08-07 16:27:11
* @Last Modified by:   7Ryan
* @Last Modified time: 2017-08-07 17:14:14
*/

require('./index.css');
require('page/common/nav-simple/index.js');
var _mm = require('util/mm.js');

$(function(){
    var type = _mm.getUrlParam('type') || 'default',
        $element = $('.'+type+'-success');
    //显示对应的提示元素
    $element.show();
})