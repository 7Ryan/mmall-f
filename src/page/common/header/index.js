/* 
* @Author: 7Ryan
* @Date:   2017-08-07 12:57:56
* @Last Modified by:   7Ryan
* @Last Modified time: 2017-08-17 15:49:03
*/

require('./index.css');

var _mm = require('util/mm.js');
//通用页面头部
var header = {
    init: function(){
        this.onLoad();
        this.bindEvent();
    },
    onLoad: function(){
        var keyword = _mm.getUrlParam('keyword');
        //keyword存在，则回填输入框
        if(keyword){
            $('#search-input').val(keyword);
        }
    },
    bindEvent: function(){
        var _this = this;
        //点击搜索按钮后，做搜索提交
        $('#search-btn').click(function(){
            _this.searchSubmit();
        });
        //回车后，做搜索提交
        $('#search-input').keyup(function(e){
            //13是回车键
            if(e.keyCode === 13){
            _this.searchSubmit();
        }
        });
    },
    //搜索的提交
    searchSubmit: function(){
        var keyword = $.trim($('#search-input').val());
        //若提交时有keyword,正常跳转到list页
        if(keyword){
            window.location.href = './list.html?keyword='+keyword;
        }
        //若keyword为空，直接返回首页
        else{
            _mm.goHome;
        }
    }
};
header.init();