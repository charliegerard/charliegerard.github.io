import { Collection } from 'backbone';
import Project from './projectModel';

class ProjectCollection extends Collection{
  constructor(model){
    super(model);
    this.model = Project;
  }
}

export default ProjectCollection;
