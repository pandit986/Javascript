// for Each Loop
const coding = ["js","ruby","java","python","cpp"]

coding.forEach((item,index,arr)=>{
console.log(item);
console.log(index);
console.log(arr);
})

const mycoding = [
    {
    languageName:"javascript",
    languageFileName:"js",
    },
    {
    languageName:"python",
    languageFileName:"py",
    },
    {
    languageName:"c++",
    languageFileName:"cpp",
    },
    {
    languageName:"java",
    languageFileName:"java",
    },
]

mycoding.forEach((item)=>{
    const {languageName,languageFileName} = item
    console.log(languageFileName,languageName);
})