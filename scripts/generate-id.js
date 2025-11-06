import { v4 as uuid } from 'uuid';
import clipboard from 'clipboardy';

const id = uuid();

clipboard.writeSync(id);
console.log(id);
