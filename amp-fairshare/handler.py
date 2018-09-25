# -*- coding: utf-8 -*-

import os
import sys


def handle(req):

    ret = ''

    try:

        bytes = None

        with open('./function/dist/index.html') as f:
            bytes = f.read()
        
        ret = str(bytes)

    except:

        ret = 'message: {0}'.format(sys.exc_info()[0])

    return ret
