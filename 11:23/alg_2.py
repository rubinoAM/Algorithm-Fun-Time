"""
Problem: 	Suppose we have a group of 6 vertices connected to each other.
			Every time we traverse a pair of vertices, we add the weight of
			that edge to our traversal total.
			We need to find a way of traversing the vertices that leads to
			the smallest possible traversal total.
"""

traversal_total = 0
vertices = ["a", "b", "c", "d", "e", "f"]
edges = {
	"a":{
		"vertices":[vertices[0],vertices[1]],
		"weight":1
	},
	"b":{
		"vertices":[vertices[0],vertices[2]],
		"weight":3
	},
	"c":{
		"vertices":[vertices[0],vertices[5]],
		"weight":2
	},
	"d":{
		"vertices":[vertices[1],vertices[2]],
		"weight":2
	},
	"e":{
		"vertices":[vertices[1],vertices[3]],
		"weight":1
	},
	"f":{
		"vertices":[vertices[1],vertices[5]],
		"weight":3
	},
	"g":{
		"vertices":[vertices[3],vertices[4]],
		"weight":1
	},
	"h":{
		"vertices":[vertices[3],vertices[5]],
		"weight":2
	}
}

for edge_name, edge_info in edges.items():
	for weight in edge_info.items():
		print (value)