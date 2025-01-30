const levels = 100;
const inorder = Array.from({ length: levels }, (_, i) => i + 1);
const postorder = Array.from({ length: levels }, (_, i) => i + 1);

//Definition for a binary tree node.
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
  if (inorder.length === 0 || postorder.length === 0) return null;

  // The last element of postorder is the root of the current tree
  const rootValue = postorder.pop()!;
  const root = new TreeNode(rootValue);
  // Find the index of the root in the inorder array
  const rootIndex = inorder.indexOf(rootValue);
  // Is time to recursion...
  root.right = buildTree(inorder.slice(rootIndex + 1), postorder);
  root.left = buildTree(inorder.slice(0, rootIndex), postorder);
  // console.log(root);
  return root;
}

function buildTreeV2(inorder: number[], postorder: number[]): TreeNode | null {
  const mapped = new Map(inorder.map((val, idx) => [val, idx]));

  const build = (
    postInd: number,
    inStart: number,
    inEnd: number
  ): TreeNode | null => {
    if (postInd < 0 || inEnd < inStart) {
      return null;
    }

    const rootVal = postorder[postInd];
    const node = new TreeNode(rootVal);
    const inIndex = mapped.get(rootVal)!;
    const rightSize = inEnd - inIndex;

    // Recursion
    node.left = build(postInd - 1 - rightSize, inStart, inIndex - 1);
    node.right = build(postInd - 1, inIndex + 1, inEnd);
    return node;
  };

  // More recursion
  return build(postorder.length - 1, 0, inorder.length - 1);
}

buildTree(inorder, postorder);
