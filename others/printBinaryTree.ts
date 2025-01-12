// Breadth-first search
// Traverse
// Djskatra
// Dinamic Programming

type NodeType = {
  value: number;
  left: NodeType | null;
  right: NodeType | null;
};

const rootNode: NodeType = {
  value: 1,
  left: {
    value: 2,
    left: { value: 4, left: null, right: null },
    right: { value: 5, left: null, right: null },
  },
  right: {
    value: 3,
    left: { value: 6, left: null, right: null },
    right: null,
  },
};

// Traverse this tree Work wrong
function print(node: any) {
  console.log(node.value);
  if (node.left) {
    print(node.left);
  }

  if (node.right) {
    print(node.right);
  }
}

// Traverse this tree Work wrong
function printV2(node: any, depth: number = 0) {
  console.log(node.value, depth);
  if (node.left) {
    printV2(node.left, depth + 1);
  }

  if (node.right) {
    printV2(node.right, depth + 1);
  }
}

print(rootNode);
console.log("###############");
printV2(rootNode);

// Now imagine that you have levels
const levels: any = [];
function printV3(node: any, depth: number = 0) {
  if (!levels[depth]) {
    levels[depth] = [];
  }
  levels[depth].push(node.value);
  if (node.left) {
    printV3(node.left, depth + 1);
  }

  if (node.right) {
    printV3(node.right, depth + 1);
  }
}

printV3(rootNode);
console.log("LEVELS");
for (let i = 0; i < levels.length; i++) {
  console.log(`Level ${i}: ${levels[i].join(",")}`);
}

// But using.. BFS? with a queue
function traverse(node: NodeType) {
  const queue: any[] = [];
  let lastDepth = 0;
  let output = "";
  queue.push({ node, depth: 0 });
  while (queue.length > 0) {
    const { node, depth } = queue.shift();
    if (depth > lastDepth) {
      output += "\n";
      lastDepth = depth;
    }
    output += node.value + " ";
    if (node.left) queue.push({ node: node.left, depth: depth + 1 });

    if (node.right) queue.push({ node: node.right, depth: depth + 1 });
  }

  console.log(output);
}

traverse(rootNode);
