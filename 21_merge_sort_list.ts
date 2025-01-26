class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null,
): ListNode | null {
  const listNode = new ListNode();

  if (list1 === null) return list2;
  if (list2 === null) return list1;

  if (list1.val >= list2.val) {
    listNode.val = list2.val;
    listNode.next = mergeTwoLists(list1, list2.next);
  } else if (list1.val < list2.val) {
    listNode.val = list1.val;
    listNode.next = mergeTwoLists(list1.next, list2);
  }

  return listNode;
}

function mergeTwoListsV2(
  list1: ListNode | null,
  list2: ListNode | null,
): ListNode | null {
  const dummyList = new ListNode(-1);
  let current = dummyList;

  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }

    current = current.next;
  }
  if (list1 !== null) {
    current.next = list1;
  } else if (list2 !== null) {
    current.next = list2;
  }
  return dummyList.next;
}

const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));

const mergedList = mergeTwoLists(list1, list2);

function printList(head: ListNode | null): void {
  const result: number[] = [];
  while (head !== null) {
    result.push(head.val);
    head = head.next;
  }
  console.log(result);
}
printList(mergedList);

setTimeout(() => {
  const mergedListV2 = mergeTwoListsV2(list1, list2);
  printList(mergedListV2);
}, 100);
