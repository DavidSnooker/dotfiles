"vundle
set nocompatible
filetype off
set rtp+=~/.vim/bundle/vundle/
call vundle#rc()
filetype plugin indent on
Bundle 'gmarik/vundle'
"fancy status
Bundle 'bling/vim-airline'
"format
Bundle 'initrc/neinspace'
"file navigation
Bundle 'scrooloose/nerdtree'
Bundle 'kien/ctrlp.vim'
"git
Bundle 'tpope/vim-fugitive'
"search
Bundle 'rking/ag.vim'
"syntax
Bundle 'scrooloose/syntastic'

"leader
let mapleader=','
let maplocalleader='\\'

"airline
let g:airline_powerline_fonts=1

"neinspace
nnoremap <silent> <leader>w :NeinspaceClear<CR>

"nerdtree
autocmd vimenter * if !argc() | NERDTree | endif
autocmd bufenter * if (winnr('$') == 1 && exists('b:NERDTreeType') && b:NERDTreeType == 'primary') | q | endif
let NERDTreeIgnore=['\.pyc$', '\.class$']
nnoremap <silent> <leader>f :NERDTreeToggle<CR>

"ctrlp
let g:ctrlp_map='//'
let g:ctrlp_working_path_mode='ra'
let g:ctrlp_custom_ignore='\v[\/]\.(git|hg|svn)$'
let g:ctrlp_user_command='find %s -type f'

"syntastic
let g:syntastic_check_on_open=1
let g:syntastic_python_checkers=['flake8']
let g:syntastic_javascript_checkers=['jslint']

"ui
let &t_Co=256
colorscheme mustang
syn on
set number
set laststatus=2

"clipboard
set clipboard+=unnamed

"tab
set tabstop=4
set shiftwidth=4
set expandtab

"indent
set ai
set autoindent
set smartindent
filetype plugin indent on

"search
set hlsearch
set incsearch
set showmatch
set ignorecase
set smartcase

"tabstop=2
au BufNewFile,BufRead *.vim,*.html,*.css,*.js set tabstop=2
au BufNewFile,BufRead *.vim,*.html,*.css,*.js set shiftwidth=2

"encoding
set fileencodings=utf-8,gb2312,gbk,gb18030

"mapping

"esc is too far away
inoremap jk <Esc>
"H and L for start and end of line
nnoremap H ^
nnoremap L $
"U to redo
nnoremap U <C-r>
"window
nnoremap <silent> gh :wincmd h<CR>
nnoremap <silent> gj :wincmd j<CR>
nnoremap <silent> gk :wincmd k<CR>
nnoremap <silent> gl :wincmd l<CR>
nnoremap <silent> gp :wincmd p<CR>
nnoremap <silent> g= :wincmd =<CR>
nnoremap <silent> gx :wincmd x<CR>
"last command
noremap <F8> <Esc>:w<CR>:!%:p<CR>

"ignore
set wildignore=*/tmp/*,*.pyc,*.o,*~,*.so,*.swp,*.zip,*.jpg,*.png,*.gif
