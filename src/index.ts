import decode from './main'

async function main(): Promise<any> {
  console.log('hello')
}

window.addEventListener('DOMContentLoaded', () => {
    main();

    const file = document.getElementById('file')
    file?.addEventListener('change', (evt: any) => {
      let file = evt.target.files[0]
      console.log(file)
      const reader = new FileReader()
      reader.readAsArrayBuffer(file)
      reader.onload = async function (e: any) {
        const result = await decode(e.target.result)
        console.log(result)
      }
    })
});
