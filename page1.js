function addByAlp() {
    for(var i in names) {
        if(names[i] in selected) {
            $('#names').append('<button type="button" class="btn namebtn selected" id="' + names[i] + '">' + names[i] + '</button>');
        } else {
            $('#names').append('<button type="button" class="btn namebtn" id="' + names[i] + '">' + names[i] + '</button>');
        }
    }
    btnOnClick();
}

function addByShow() {
    for(var song in songToNames) {
        $('#names').append('<h5 class="title">' + song + '</h5>');
        for(var i in songToNames[song]) {
            var name = songToNames[song][i];
            if(name in selected) {
                $('#names').append('<button type="button" class="btn namebtn selected" id="' + songToNames[song][i] + '">'
                + songToNames[song][i] + '</button>');
            } else {
                $('#names').append('<button type="button" class="btn namebtn" id="' + songToNames[song][i] + '">'
                + songToNames[song][i] + '</button>');
            }
        }
    }
    btnOnClick();
}

$('.nav-link').click(function(){
    $('.nav-link').removeClass("active");
    $(this).addClass("active");
})

var songToNames = {"Honey":["郑乃馨","卞卡","黄恩茹","伍雅露","万芳舟","张艺凡","赵天爱"],
"手扶拖拉机斯基":["姜丹","李保怡","林嘉慧","马玉灵","王丽娜","文婕"],
"招牌动作":["刘些宁","华承妍","李梦琦","李紫梦","王柯","徐艺洋","曾淑岩"],
"潇洒小姐":["曾雪瑶","敖心仪","姜贞羽","林君怡","苏芮琪","舒一灵","希林娜依▪高"],
"大碗宽面":["屠芷莹","陈柔冰","陈珂","惠玉","孙露鹭","宋宇苗","卫倩妮"],
"窒息":["拉娜","黄若元","李佳洁","吕欣蔚","孟欢","张清"],
"神奇":["王艺瑾","高直","吉扬柳","潘小雪","庞雪倩","赵粤","张馨允"],
"青鸟":["黄雨晴","黄碧茵","鹂蔓","马思惠","王靖贤","仲菲菲","张雅卓"],
"除了春天爱情和樱花":["朱主爱","陈卓璇","崔文美秀","胡玛尔","胡嘉欣","史芮伊","王曦瑶"],
"One Time":["毕少岩","陈倩楠","李佳恩","刘雨露","温馨","许潇晗","张欣媚"],
"随便！":["钟欣","陈欣叶","胡娅楠","李丞汐","谭思慧","谢安诗"],
"刀剑如梦":["刘诗琦","李雨露","妙静鸥","沈小婷","王一桥","余子鱼","张纯如"],
"哈鹿哈鹿哈鹿":["刘念","丁诗妤","孙珍妮","王雨朵","吴晓凝","于扬子","朱苓"],
"甜蜜蜜":["田京凡","冯琬贺","康汐","吴妙茵","张馨文","周雨霖"],
"加油！AMIGO":["刘梦","陈俞瑾","孙如云","谢樱俊","谢安然","姚慧","袁嘉艺"]
}

var names = [];
var selected = {};
var count = 0;

for(var song in songToNames) {
    for(var i in songToNames[song]) {
        names.push(songToNames[song][i]);
    }
}

names.sort((x,y)=>x.localeCompare(y, 'zh-CN'));
addByAlp();

$("#alp").click(function(){
    event.preventDefault();
    $("#names").empty();
    addByAlp();
})

$("#show").click(function(){
    event.preventDefault();
    $("#names").empty();
    addByShow();
})

function btnOnClick() {
    $(".namebtn").click(function(){
        if($(this).hasClass( "selected" )) {
            $(this).removeClass("selected");
            delete selected[$(this).attr('id')];
            count--;
        } else {
            $(this).addClass("selected");
            selected[$(this).attr('id')] = 0;
            count++;
        }
        if(count === 0) {
            $(".start").addClass("disabled");
        } else {
            $(".start").removeClass("disabled");
        }
    })
}

$(".namebtn").mouseover(function() {
    event.preventDefault();
})
.mouseout(function() {
    event.preventDefault();
});
