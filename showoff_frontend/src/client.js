
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';


export const client = createClient ({
    projectId: 'zq6foc8j',
    dataset: 'production',
    apiVersiion: '2021-11-16',
    useCdn: true,
    token: 'sk5W6PsqETiRx7wRoSdsTZiWRBNR9AM5oWTUY1dCPRWkiMOu3RQor7qenoXJ4jblhGuoXcuY9KQnOmDEZ3Pwutu5RR5iCS7uKUkybcNDFIWbOgRdpWcVvusjcaBZGKlKyq8Mddl8gj79qh7tr6BHuKnhvKGoYnns54fpHxh4Jikx4XHbxoxs',
});
const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);