import { Component, Input } from '@angular/core';
import { Project } from '../../models/project';

@Component({
  selector: 'app-project-displayer',
  templateUrl: './project-displayer.component.html',
  styleUrls: ['./project-displayer.component.scss']
})
export class ProjectDisplayerComponent {
    @Input() proj!: Project;
}
