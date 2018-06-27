import { Model } from 'backbone';

class Project extends Model {
  defaults(){
    return {
      title: '',
      image: '',
      srcset: '',
      url: '',
      description: '',
      projectDescription: ''
    }
  }
}

export default Project;
