import os
import sys
import json


def handle(req):

    try:

        # Return var
        ret = {}

        if os.getenv('Http_Method') == 'POST':

            # Open log file for write
            with open('/tmp/pi.log', 'w') as f:

                # Parse request data
                json_req = json.loads(req)

                # Write log to file
                f.write(str(json_req['log']))

                # Set return message
                ret = {'message': 'ok'}

                # parse to JSON
                ret = json.dumps(ret)

        else:

            # Open log file for read
            with open('/tmp/pi.log', 'r') as f:

                # Replace \n with <br> tag
                logs = (f.read()).replace('\n', '<br>')
    
                # Add HTML template
                logs = '<html><head></head><body>{0}</body></html>'.format(logs)
    
                # Set to return object
                ret = logs

        # Return object
        print ret

    except:

        # Return error
        print 'message:', sys.exc_info()[0]
