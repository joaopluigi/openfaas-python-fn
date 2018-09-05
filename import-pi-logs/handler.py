import os
import sys
import json


def handle(req):
    try:

        # Open log file
        f = open('pi.log', 'r+')

        # Return var
        ret = {}

        if os.getenv('Http_Method') == 'POST':

            # Parse request data
            json_req = json.loads(req)

            # Write log to file
            f.write(str(json_req['log']))

            # Set return message
            ret = {'message': 'Log updated!'}

        else:

            # Get log file string
            ret = {'log': f.read()}
            

        # Return object
        print json.dumps(ret)

    except:

        # Return error
        print "Unexpected error:", sys.exc_info()[0]
