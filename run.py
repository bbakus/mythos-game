#!/usr/bin/env python3

from server.app import app

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5555, debug=True) 