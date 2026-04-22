export const fileList = [
    {
        id:"1",
        title:"笔记",
        children:[
            { id:"1-1", icon:"📂", title:"java", link:"#" },
            { 
                id:"1-2", 
                icon:"📂", 
                title:"oracle", 
                link:"#",
                children:[
                    { id:"1-2-1", icon:"📝",  title:"1.Oracle 常用知识手册", link:"/src/note/oracle/1.Oracle 常用知识手册.html" },
                    { id:"1-2-2", icon:"📝",  title:"2.Oracle-CTE的使用场景", link:"/src/note/oracle/2.Oracle-CTE的使用场景.html" }
                ]
            },
            { id:"1-3", icon:"📂", title:"linux", link:"#" },
            { id:"1-4", icon:"📂", title:"mybatis", link:"#" },
        ]
    },
    {
        id:"2",
        title:"其他",
        children:[
            { id:"2-1", icon:"🎨", title:"小游戏", link:"/src/other/snake/index.html" },
            { id:"2-2", icon:"📝", title:"Webpack5", link:"/src/other/webpack/index.html" } 
        ]
    }
]
