import { Model } from 'backbone';

class Project extends Model {
  defaults(){
    return {
      title: '',
      image: '',
      url: '',
      description: '',
      projectDescription: ''
    }
  }
}

export default Project;
