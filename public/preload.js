const { ipcRenderer, contextBridge } = require('electron');

window.ipcRenderer = ipcRenderer;
contextBridge.exposeInMainWorld('electronAPI', {
    invoke: async (channel, data, data2) => {
        const validChannels = ['readFile', 'readDir', 'writeFile', 'openDocumentWindow'];
        if (validChannels.includes(channel)) {
            try {
                const response = await ipcRenderer.invoke(channel, data, data2);
                return response;
            } catch (error) {
                console.error('Error in invoking IPC:', error);
                return null;
            }

        }
    }
});