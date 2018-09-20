# -*- coding: utf-8 -*-

import os
import sys


def handle(req):

    ret = ''

    try:

        with open(os.path.dirname(__file__) + '/index.html') as f:
            ret = f.read()

    except:

        ret = 'message: {0}'.format(sys.exc_info()[0])

    return ret
