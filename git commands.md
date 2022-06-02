git status: projedeki değişiklik yapılan dosyaların eklenip eklenmediğini gösterir kırmızı/yeşil. 

git log: yapılan commitlerin detaylarını gösterir.

	NOT: git log -n 1: en yukarıdan itibaren 1 tanesini getirir

git commit –amend: son commiti değiştirebiliriz.

git revert commitID: o commiti siler  

	NOT: en az 7 karakter yeter ID’yi kullanabilmemiz için.

git reset –hard commitID: o committen itibaren yukarıdakileri siler

	NOT: revertteki gibi arkada “revert commiti” bırakmaz.

git diff commitID..commitID index.md: bu iki commit arasındaki farkı getirir.

---

git branch: var olan branchleri gösterir.

git branch name: name adında branch oluşturur.

git checkout name: name adındaki branche geçer

git checkout -b name: direk name adında branch oluşturup direk geçer.

git branch -D name: name adındaki branchi siler

git stash: son committen itibaren yaptığımız değişiklikleri bir yerde tutar,son commite döneriz

git stash list: stashleri listeler 

git stash clear: stashi siler 

git stash pop: en üstteki kaydı geri getirir.

	NOT: o stash listeden silinir.

git stash apply stash{x}: seçilen stashi getirir ama listeden kaldırmaz.

git merge: branchları birleştirir. Bütün commitleri bir araya getirir.

	NOT: bütün commitleri kronolojik sıralar ve merge ettiğimize dair bir commit  atar.

git merge –squash name: mergeden farkı birleşme sonrası bir commit yazmamıza olanak tanır.

git rebase: master brancha ayrıldığı noktadan itibaren eklenir, sonra master branch eklenir.

	NOT: hem kronolojik olmamasından hemde birleşme sonraso commit olmamasından merge public projelerde ekipler tarafından tercih edilir.commitlerde conflict yaşanabilir

git merge –abort: merge’i iptal eder. conflicteyken vs..