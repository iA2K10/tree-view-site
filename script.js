<script>
document.addEventListener("DOMContentLoaded", () => {
  const togglers = document.querySelectorAll(".caret");
  togglers.forEach(caret => {
    caret.addEventListener("click", function() {
      this.parentElement.querySelector(".nested").classList.toggle("active");
      this.classList.toggle("caret-down");
    });
  });
});
</script>
