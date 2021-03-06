import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { ISong, Song } from 'app/shared/model/song.model';
import { SongService } from './song.service';

@Component({
  selector: 'jhi-song-update',
  templateUrl: './song-update.component.html'
})
export class SongUpdateComponent implements OnInit {
  isSaving = false;

  editForm = this.fb.group({
    id: [],
    syncifyId: [],
    isrc: [],
    name: [],
    artist: [],
    album: [],
    spotifyURL: [],
    appleURL: []
  });

  constructor(protected songService: SongService, protected activatedRoute: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ song }) => {
      this.updateForm(song);
    });
  }

  updateForm(song: ISong): void {
    this.editForm.patchValue({
      id: song.id,
      syncifyId: song.syncifyId,
      isrc: song.isrc,
      name: song.name,
      artist: song.artist,
      album: song.album,
      spotifyURL: song.spotifyURL,
      appleURL: song.appleURL
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const song = this.createFromForm();
    if (song.id !== undefined) {
      this.subscribeToSaveResponse(this.songService.update(song));
    } else {
      this.subscribeToSaveResponse(this.songService.create(song));
    }
  }

  private createFromForm(): ISong {
    return {
      ...new Song(),
      id: this.editForm.get(['id'])!.value,
      syncifyId: this.editForm.get(['syncifyId'])!.value,
      isrc: this.editForm.get(['isrc'])!.value,
      name: this.editForm.get(['name'])!.value,
      artist: this.editForm.get(['artist'])!.value,
      album: this.editForm.get(['album'])!.value,
      spotifyURL: this.editForm.get(['spotifyURL'])!.value,
      appleURL: this.editForm.get(['appleURL'])!.value
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<ISong>>): void {
    result.subscribe(
      () => this.onSaveSuccess(),
      () => this.onSaveError()
    );
  }

  protected onSaveSuccess(): void {
    this.isSaving = false;
    this.previousState();
  }

  protected onSaveError(): void {
    this.isSaving = false;
  }
}
