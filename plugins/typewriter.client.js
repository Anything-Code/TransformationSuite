import Typewriter from 'typewriter-effect/dist/core';

export default ({ app }, inject) => {
  inject('typewriter', () => {
    if (document.querySelector('#typewriter'))
    new Typewriter('#typewriter', {
      autoStart: true,
      cursor: '',
      delay: 10,
      loop: true
    }).typeString('Wilkommen in der Transformation Suite!')
      .pauseFor(4000)
      .deleteAll(1)
      .typeString('Hier finden Sie die innovativsten Produkte zum Thema Digitalisierung, bereitgestellt durch die besten KMUs auf diesem Gebiet in Heidelberg.')
      .pauseFor(4000)
      .deleteAll(.00001)
      .typeString('Außerdem können Sie sich für einen Ausstellungsplatz bewerben und in unserem FAQ interessante Fragen stellen, die wir ihnen gerne beantworten!')
      .pauseFor(4000)
      .deleteAll(.00001)
      .start();
  });
}
