import HttpConnection from './connection';
import TOML from '@iarna/toml';

class ResumeFetcher {
  constructor() {
    this._resume = null;
  }

  async fetch(url) {
    const conn = new HttpConnection(url);
    const response = await conn.get();

    try {
      this._resume = TOML.parse(response);
    } catch(err) {
      throw err;
    }
  }

  resume() {
    return this._resume;
  }  
}

export default ResumeFetcher;