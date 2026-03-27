import json, struct
with open('assets/Thanh.glb', 'rb') as f:
    f.read(12) # magic, version, length
    chunk_length, chunk_type = struct.unpack('<I4s', f.read(8))
    json_data = json.loads(f.read(chunk_length))
    nodes = [(i, n.get('name', '')) for i, n in enumerate(json_data.get('nodes', []))]
    print("Nodes:", len(nodes), [n[1] for n in nodes if 'Arm' in n[1] or 'Leg' in n[1] or 'mixamo' in n[1].lower()])
