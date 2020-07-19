$("#AddButton").on("click", (e) => {
    e.preventDefault();
    addItem($("#ItemInput").val())
});

function addItem(item) {
    console.log("Adding " + item);
    let div = $(`<li id="list-item-${item}" checked="no">${item}<div class="item-buttons"><button type="submit" class="CompleteButton">Check</button><button type="submit" class="DeleteButton">Delete</button></div></li>`)
    $(".ItemList").append(div)

    $(".CompleteButton").on("click", (e) => {
        e.preventDefault();
        var list_item = $(`#list-item-${item}`);
        console.log(list_item.attr("checked"));
        if (list_item.attr("checked") === "yes") {
            list_item.attr("checked", "no");
            list_item.removeProp("text-decoration");
        } else {
            list_item.attr("checked", "yes");
            list_item.css("text-decoration", "line-through");
        }
    });

    $(".DeleteButton").on("click", (e) => {
        e.preventDefault();
        var list_item = $(`#list-item-${item}`);
        list_item.remove();
    });
}
