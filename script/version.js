import pkg from '../package.json'

export const initVersion = () => {
  console.log(
    `\n %c Sedom ${pkg.version} %c sedom.fzf404.art \n`,
    'color: #f1f3f5; background: #4263eb; padding:0.4rem 0;',
    'background: #dee2e6; color: #212529; padding:0.4rem 0;'
  )
}
