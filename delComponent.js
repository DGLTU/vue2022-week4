export default {
    props: ['temp'],
    
    template: `
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header bg-danger">
                <h5 class="modal-title" id="delProductLabel">確定刪除此商品嗎 ?</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <p>您要刪除的商品為</p>
                <p>商品ID : {{temp.id}}</p>
                <p>商品名稱 : {{temp.title}}</p>

            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
                <button type="button" class="btn btn-danger" @click="$emit('del-product',temp.id)">確認刪除</button>
            </div>
        </div>
    </div>
    `,
}