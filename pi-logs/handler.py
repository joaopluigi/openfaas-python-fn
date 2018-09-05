import os
import sys
import json


def handle(req):

    try:

        # Return var
        ret = {}

        if os.getenv('Http_Method') == 'POST':

            # Open log file for write
            f = open('pi.log', 'w')

            # Parse request data
            json_req = json.loads(req)

            # Write log to file
            f.write(str(json_req['log']))

            # Set return message
            ret = {'message': 'ok'}

        else:

            # Open log file for read
            f = open('pi.log', 'r')

            # Get log file string
            ret = {'message': 'ok', 'log': f.read()}

        # Close file
        f.close()

        # Return object
        print json.dumps(ret)

    except:

        # Return error
        print 'message:', sys.exc_info()[0]
