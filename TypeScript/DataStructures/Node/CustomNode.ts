export default class CustomNode<T> {
  public value: any;
  public next: CustomNode<T> | null;
  public prev: CustomNode<T> | null;

  constructor(
    value: T,
    next: CustomNode<T> | null = null,
    prev: CustomNode<T> | null = null
  ) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}
