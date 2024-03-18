<!--
 * @Description: 
 * @Author: longhang
 * @Date: 2021-06-25 15:46:54
 * @LastEditors: longhang
 * @LastEditTime: 2024-03-18 20:08:51
-->
<template>
    <div id = "about-me">
            <section class = "video">
                <video src="/video/aboutme.mp4" width = "100%" height = "435px" autoplay controls loop>
                您的浏览器不支持 video 标签。
                </video>
            </section>
             <section class = "education">
                  <h1><center class = "education-title">教育</center></h1>
                  <dl>
                    <dt><span class = "education-subtitle">重庆市永川区三教幼儿园</span></dt>
                    <dd>在那里我接受了4年的教育，从两岁到六岁，幼儿园教我如何文明语言，怎样做一个好孩子，谢谢以前的棍棒教育，黄荆棍下出好人</dd>
                    <dt><span class = "education-subtitle">重庆市永川区西北小学</span></dt>
                    <dd>在那里我接受了6年的教育，第一拿到手软，我从一个无知的小孩变成懵懂的小孩，小学老师教我要耐得住寂寞，感谢小学老师的培养，没有他们的付出，就没有现在我的逗比.</dd>
                    <dt><span class = "education-subtitle">重庆永川萱花中学</span></dt>
                    <dd>在这里我接受了6年的教育，认识了我现在的妻子，在这里我从一个男孩变成一个男人，没有高中老师方国民，我考不上大学，谢谢方老师</dd>
                     <dt><span class = "education-subtitle">重庆皇家理工</span></dt>
                    <dd>在这里接受了4年的本科教育，也喜欢上了互联网这个行业，谢谢大学实验室老师的培养，让我对于以后不再迷茫</dd>
                  </dl>
            </section>
             <section class = "work">
                  <h1><center class = "education-title">工作</center></h1>
                   <dl>
                    <dt><span class = "education-subtitle">永辉金融</span></dt>
                    <dd>很喜欢永辉金融这个平台，在为公司贡献的同时能学到很多技术以及金融相关的知识.</dd>
                  </dl>
            </section>
    </div>
</template>
<script>
 
</script>
<style>
  
    #about-me .video{
        overflow:hidden;
    }
    #about-me dt{
        position:relative;
    }
    #about-me .education-title{
        padding:10px;
        background:#3eaf7c;
        color:#fff;
    }
   .education-subtitle{
       display:inline-block;
       margin:20px 0;
       padding:10px 0;
       width:260px;
       border:2px solid #3eaf7c;
       text-align:center;
       font-weight:bold;
       font-size:18px;
       color:#3eaf7c;
   }
</style>