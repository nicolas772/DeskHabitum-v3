const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
  userData: () => ipcRenderer.invoke('getUserData'),
  logout: () => ipcRenderer.invoke('logout'),
  activateMonitoring: () => ipcRenderer.invoke('activateMonitoring'),
  deactivateMonitoring: () => ipcRenderer.invoke('deactivateMonitoring'),
  openSetting: () => ipcRenderer.invoke('openSetting'),
  openPerfil: () => ipcRenderer.invoke('openPerfil'),
  openContactar: () => ipcRenderer.invoke('openContactar'),
  guardarCambiosSetting: () => ipcRenderer.invoke('guardarCambiosSetting'),
  saveProfesional: (data) => ipcRenderer.invoke('saveProfesional', data),
  getProfesional: () => ipcRenderer.invoke('getProfesional'),
  enviarCorreoProfesional: () => ipcRenderer.invoke('enviarCorreoProfesional'),
  newNotification: () => ipcRenderer.invoke('newNotification')
});