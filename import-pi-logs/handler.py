import json


def handle(req):
    try: 
        json_req = json.loads(req)
        print json.dumps(json_req)
    except:
        pass
