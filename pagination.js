export default{
    props:['pagination'],
    template: `
    <nav aria-label="Page navigation example">
        <ul class="pagination">
            <li class="page-item"
                :class="{'disabled':!  pagination.has_pre}" 
                @click.prevent="$emit('turn-page',pagination.current_page-1)">
                <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </a>
            </li>
            <li class="page-item" :class="{'disabled':(pagination.current_page===page)}" 
                v-for="(page,index) in pagination.total_pages" 
                :key="index" @click.prevent="$emit('turn-page',page)">
                <a class="page-link" href="#">{{page}}</a></li>
            <li class="page-item" 
                :class="{'disabled':!  pagination.has_next}" 
                @click.prevent="$emit('turn-page',pagination.current_page+1)">
                <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </a>
            </li>
        </ul>
    </nav>  
    `,
}