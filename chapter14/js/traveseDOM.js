/**
 * Visits each node of the DOM in preorder mode.
 * Tat is, Root first, then Left Subtree and  then
 * Right Subtree.
 * 
 * @param {Node} tree - the tree root node.
 */
function preOrderTraversal(tree) {
    console.log(tree)
    for (const subtree of tree.children) {
        preOrderTraversal(subtree)
    }
}

preOrderTraversal(document);

function traverseText(t) {
    let s = ''

    for (let child = t.firstChild; child !== null; child = child.nextSibling) {
        if (child.nodeType === 3) s += child.nodeValue + " "
        else if ((child.nodeType === 1) && (child.nodeName !== "SCRIPT")) {
            s += traverseText(child)
        }
    }
    return s;
}

console.log(traverseText(document.body))