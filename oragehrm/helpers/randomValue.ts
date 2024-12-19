
export default function randomValue(text: string): string {

 return text + (Math.floor(Math.random() * 10000)).toString();
}