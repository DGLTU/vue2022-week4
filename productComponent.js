export default {
    props: ['temp', 'state'],
    
    template: `
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="productLabel" v-if="state==='add'">建立新商品</h5>
                    <h5 class="modal-title" id="productLabel" v-if="state==='edit'">編輯新商品</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form @submit.prevent>
                    <div class="modal-body  add-product">
                        <div class="row g-2">
                            <div class="col-md">
                                <label for="title" class="form-label">商品名稱</label>
                                <input type="text" class="form-control" id="title" v-model="temp.title"
                                    required></input>
                            </div>
                            <div class="col-md">
                                <label for="category" class="form-label">商品分類</label>
                                <input type="text" class="form-control" id="category" v-model="temp.category"
                                    required></input>
                            </div>
                        </div>
                        <div class="row g-3">
                            <div class="col-md">
                                <label for="price" class="form-label">售價</label>
                                <input type="number" class="form-control" min="0" id="price"
                                    v-model.number="temp.price" required></input>
                            </div>
                            <div class="col-md">
                                <label for="originPrice" class="form-label">原價</label>
                                <input type="number" class="form-control" min="0" id="originPrice"
                                    v-model.number="temp.origin_price" required></input>
                            </div>
                            <div class="col-md">
                                <label for="unit" class="form-label">單位</label>
                                <input type="text" class="form-control" id="unit" v-model="temp.unit"
                                    required></input>
                            </div>
                        </div>
                        <label for="description" class="form-label">商品描述</label>
                        <textarea class="form-control" id="description" rows="5" v-model="temp.description"
                            required></textarea>
                        <label for="content" class="form-label">商品內容</label>
                        <input type="text" class="form-control" id="content" v-model="temp.content"
                            required></input>
                        <div class="mt-3 form-check">
                            <label class="form-check-label" for="isEabled">是否啟用</label>
                            <input type="checkbox" class="form-check-input" id="isEabled"
                                v-model="temp.is_enabled">
                        </div>
                        <div class="row g-2">
                            <div class="col-md">
                                <label for="imageUrl">主圖網址</label>
                                <input type="text" class="form-control" id="imageUrl" v-model="temp.imageUrl"
                                    required>
                            </div>
                            <div class="col-md">
                                <img :src="temp.imageUrl" alt="">
                            </div>
                        </div>

                        <div class="row g-2">
                            <div class="col-md">
                                <label for="imageUrl0">圖片網址1</label>
                                <input type="text" class="form-control" id="imageUrl0"
                                    v-model="temp.imagesUrl[0]" @change="createImg(0,$event.target.value)">
                                <img :src="temp.imagesUrl[0]" alt="">
                            </div>
                            <div class="col-md">
                                <label for="imageUrl1">圖片網址2</label>
                                <input type="text" class="form-control" id="imageUrl1"
                                    v-model="temp.imagesUrl[1]" @change="createImg(1,$event.target.value)">
                                <img :src="temp.imagesUrl[1]" alt="">
                            </div>
                        </div>
                        <div class="row g-2">
                            <div class="col-md">
                                <label for="imageUrl2">圖片網址3</label>
                                <input type="text" class="form-control" id="imageUrl2"
                                    v-model="temp.imagesUrl[2]" @change="createImg(2,$event.target.value)">
                                <img :src="temp.imagesUrl[2]" alt="">
                            </div>
                            <div class="col-md">
                                <label for="imageUrl3">圖片網址4</label>
                                <input type="text" class="form-control" id="imageUrl3"
                                    v-model="temp.imagesUrl[3]" @change="createImg(3,$event.target.value)">
                                <img :src="temp.imagesUrl[3]" alt="">
                            </div>
                        </div>
                        <div class="row g-2">
                            <div class="col-md">
                                <label for="imageUrl4">圖片網址5</label>
                                <input type="text" class="form-control" id="imageUrl4"
                                    v-model="temp.imagesUrl[4]" @change="createImg(4,$event.target.value)">
                                <img :src="temp.imagesUrl[4]" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
                        <button type="submit" class="btn btn-primary" v-if="state==='add'" @click="$emit('updateProduct',state)" >建立</button>
                        <button type="submit" class="btn btn-success" @click="$emit('updateProduct',state)"  v-if="state==='edit'">編輯</button>
                    </div>
                </form>
            </div>
        </div>
    `,
}