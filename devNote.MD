# 1、问题： 解决vscode里面的ts语法报错  https://wenku.baidu.com/view/7529a2f44a649b6648d7c1c708a1284ac8500581.html
  解决方法：点击ctrl + shift + p 在输入框里面输入setting.json回车  在里面配置 "javascript.validate.enable": false

# 2、问题： 找不到模块“./App.vue”或其相应的类型声明 （http://events.jianshu.io/p/4fa2fa4e8726）
  解决办法：a 在根目录下新建tsconfig.json文件， 配置include项
           b 在根目录或者src下新建  文件名.d.ts  文件，并配置
          
# 3、yarn add安装依赖报错： An unexpected error occurred: "EPERM: operation not permitted
    解决办法：cls关闭当前项目再重新执行安装命令