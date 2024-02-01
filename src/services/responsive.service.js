import api from "@/services/api.js";

class ResponsiveService {
    getResponsivePrefix() {
        const width = window.innerWidth;
        if (width < 640) {
            return 'sm';
        } else if (width < 768) {
            return 'sm';
        } else if (width < 1024) {
            return 'md';
        } else if (width < 1280) {
            return 'lg';
        } else if (width < 1536) {
            return 'xl';
        } else {
            return '2xl';
        }
    }
}

export default new ResponsiveService();