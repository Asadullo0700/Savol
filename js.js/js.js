let it;
it = confirm("Assalomu alykum xush kelibsiz!!!")
console.log(it)
let qiziq;
qiziq = confirm("Sizga bir-nechta savol bersak rozimisz?")
console.log(qiziq)
 
const ism = prompt("Ismingiz nima???")
console.log(ism)
alert(`Sizning ismingiz - ${ism}mi?`)


const yosh = prompt("Yoshingiz nechida?")
console.log(yosh)
alert(`Sizning yoshingiz-${yosh}dami?`)


const oq = prompt("Siz o'quvchimisiz yoki ishchi?")
console.log(oq)
alert(`Siz-${oq}misiz`)


const hobby = prompt("Sizning sevimli mashg'ulotingiz nima?")
console.log(hobby)
alert(`Sizning sevimli mashg'ulotingiz-${hobby}mi?`)


let yoq;
yoq = confirm("Bu sayt sizga yoqdimi?")
console.log(yoq)

let rah;
rah = confirm("Ajratgan vaqtiniz uchun kattakon rahmat!")
console.log(rah)


document.write(`
<style>
table, th, td {
  border: 2px solid;
  font-size: 40px; 
  padding-left: 20px;
  padding-right: 20px;
  text-alighn:center;
  color:blue
  margin-left:60px
}
</style>
`)
document.write(`
<table>
<tr>
  <th>Ism</th>
  <th>${ism}</th>
</tr>
<tr>
  <td>Yoshingiz</td>bbb
  <td>${yosh}</td>
</tr>
<tr>
  <td>Kasb</td>
  <td>${oq}</td>
</tr>
<tr>
  <td>Hobby</td>
  <td>${hobby}</td>
</tr>
</table>`)


