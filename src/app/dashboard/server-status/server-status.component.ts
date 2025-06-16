import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
  host: {
    class: 'status',
    id: 'status'
  }
})
export class ServerStatusComponent {
  // @Input is used to pass data from parent component to child component, 
  // in this case, the parent component is the dashboard component 
  // and the child component is the server-status component
  @Input() currentStatus = 'offline';
  @Input() statusClassValue = 'status-offline';

  onStatusClick() {
    const options = ['online', 'offline', 'unknown'];
    this.currentStatus = getRandomString(options, this.currentStatus);
    // this.statusClassValue = getStatusClassValue(this.currentStatus);
  }
}

function getRandomString(arr: string[], current: string): string {
  const filtered = arr.filter(item => item !== current); // get all other status expcept the current one
  if (filtered.length === 0) throw new Error("No other values to choose from.");
  const randomIndex = Math.floor(Math.random() * filtered.length);
  return filtered[randomIndex];
}

function getStatusClassValue(currentStatus: string): string {
  if (currentStatus === 'online') {
    return 'status-online';
  } else if (currentStatus === 'offline') {
    return 'status-offline';
  } else {
    return 'status-unknown';
  }
}
