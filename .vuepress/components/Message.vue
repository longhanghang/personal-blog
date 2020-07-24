<template>
    <div id = "botui-longhanghang">
        <center class = "author-name">hi longhanghang...</center>
        <bot-ui></bot-ui>
    </div>
</template>

<script>
    import botui from 'botui'
    import vue from 'vue/dist/vue.esm.js';
    export default{
        name: 'Message',
        created(){
        },
        mounted(){
             let homeBot = new BotUI('botui-longhanghang',{vue:vue}) // id of container

             homeBot.message.add({
		     content: '您好，客官，欢迎来到longhanghang的一亩三分地！'
		}).then(function(){
            return homeBot.message.add({
                        delay: 1500,
                        content: '您有什么想对longhanghang说的吗？'
                    });
        }).
        then(function () {
		  return homeBot.action.button({
		    delay: 1000,
		    action: [{
		      text: '说什么呢',
		      value: 'sure'
		    }, {
		      text: '滚一边去😒',
		      value: 'skip'
		    }]
		  });
		}).then(function (res) {
		  if(res.value == 'sure') {
		    partone();
		  }
		  if(res.value == 'skip') {
		    end();
		  }
		});

		var partone = function () {
		  homeBot.message.add({
		    delay: 1000,
		    content: "在这里我们可以交换链接"
		  }).then(function () {
		    return homeBot.message.add({
		      delay: 1000,
		      content: '我们可以讨论博客建站的心得'
		    });
		  }).then(function () {
		    return homeBot.message.add({
		      delay: 1200,
		      content: '也可以测试你长得帅不，请输入你的名字，让小二给你检测一下吧'
		    });
		  }).then(function () {
		    return homeBot.action.text({
		      delay: 800,
		      action: {
		        value: 'longhanghang',
		        placeholder: '填写你的名字'
		      }
		    });
		  }).then(function (res) {
		    return homeBot.message.bot({
		      delay: 500,
		      content: res.value + ' 帅爆了的帅！'
		    });
		  }).then(function (){
              return homeBot.action.button({
                  delay:1000,
                  action:[{  text: '怎么才能联系到博🐖',value: 'sure'}]
              })
          }).then(function(res){
              if(res.value=='sure'){
                    parttwo();
              }
          })
		};

        var parttwo = function(){
            homeBot.message.add({
                delay: 1000,
                content: "当然是直接留言就好了，博🐖每天都会看留言的"
            }).then(function(){
                homeBot.message.add({
                    delay:1000,
                    content:"当然博🐖的qq也可以提供出来736118067，加的时候请说明是从博客上来的哦"
                })
            }).then(end)
        }

		var end = function () {
		  homeBot.message.add({
		    delay: 1000,
		    content: '客官，咱们后面再约，再见'
		  });
		};
                
        }
    }
</script>
<style src="botui/build/botui-theme-default.css"></style>
<style src="botui/build/botui.min.css"></style>
<style>
#botui-longhanghang{
    margin-top: 30px;
    padding: 0 10px 10px 10px;
    background: #46bd87;
}
.author-name{
    padding: 30px 0;
    font-size: 30px;
    font-weight: bold;
    color: #fff;
}
</style>